# SearchFuzzy JS Integration

```js
const { fuzzySearch } = require("search-fuzzy/fuzzy/fuzzy");

const data = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 21,
  },
];

fuzzySearch(data, ["name", "age"], { query: "jane" }).then((res) => {
  console.log(res)[
    // output:
    ({ name: "Jane", age: 21 }, { name: "John", age: 20 })
  ];
});
```

## JS API integration

```js
const { fuzzySearch } = require("search-fuzzy/fuzzy/fuzzy");

const fields = [];
// Content from free api
const query = { query: "consequatur qui cupiditate rerum quia soluta" };

const apiConfig = {
  url: "https://jsonplaceholder.typicode.com/posts",
  useApi: true,
  headers: {
    Authorization: "Bearer your-token",
    Accept: "application/json",
    "Custom-Header": "custom-value", // Additional custom headers
  },
  //  This will set param to the url like
  //  https://jsonplaceholder.typicode.com/posts?id=1
  params: {
    id: 1,
  },
  // We can use without param as well
};

fuzzySearch(data, fields, query, apiConfig, { maxResults: 3 })
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

# SearchFuzzy Angular Integration

## Overview

Searching for a specific data in a large dataset can be a challenging task. The searchFuzzy utility provides a powerful solution for this problem. This utility allows you to search for a specific data in a large dataset by providing a query string and a set of fields to search in. The utility returns an array of objects that match the query.

This project demonstrates the integration of the powerful `searchFuzzy` utility with Angular applications. It provides a robust mechanism for performing fuzzy searches on datasets, allowing for approximate matches in both local and remote data.

## Installation

### 1. Install the search-fuzzy package

```bash
npm install search-fuzzy
```

2. Add to your Angular project
   In your Angular project, import the searchFuzzy function where needed:

```typescript
import { fuzzySearch, Query } from "search-fuzzy/dist/fuzzy";
```

- Usage Example

```typescript
fuzzySearch(data, fields, query, apiConfig)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Parameters:

data: Array<Object>
An array of objects to search through.

fields: Array<string>
An array of string field names to search within each object.

query: string
The search query string.

apiConfig: Object (Optional)

### Configuration for searching in angular

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { fuzzySearch, Query } from "search-fuzzy/dist/fuzzy";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="container mt-20 grid justify-center">
      <input [(ngModel)]="searchQuery.query" (input)="onSearch()" />
      <ul>
        @for (result of searchResults; track $index) {
        <li>{{ result.name }}</li>
        }
      </ul>
    </section>
  `,
})
export class SearchComponent {
  searchQuery: Query = { query: "" };
  searchResults: any[] = [];
  data = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    // ... more data
  ];

  onSearch() {
    fuzzySearch(this.data, ["name", "email"], this.searchQuery).then((res) => {
      this.searchResults = res;
      // console.log(res);
    });
  }
}
```

### API Integration
To integrate the searchFuzzy utility with your Angular application, follow these steps:

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiConfig, fuzzySearch, Query } from "search-fuzzy/dist/fuzzy";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="container mt-20 grid justify-center">
      <input [(ngModel)]="searchQuery.query" (input)="onSearch()" />
      <ul>
        @for (result of searchResults; track $index) {
        <li>{{ result.name }}</li>
        }
      </ul>
    </section>
  `,
})
export class SearchComponent {
  searchQuery: Query = { query: "" };
  searchResults: any[] = [];
  private apiConfig: ApiConfig = {
    url: "https://jsonplaceholder.typicode.com/posts",
    useApi: true,
    // Optinal credentials for the request
    token: "your-token",
    headers: {
      Authorization: "Bearer your-token",
      Accept: "application/json",
      "Custom-Header": "custom-value", // Additional custom headers
    },
    params: {
      // Optinal params for the request
      id: "1",
    },
  };

  onSearch() {
    fuzzySearch([], ["name", "title"], this.searchQuery, this.apiConfig)
      .then((res) => {
        this.searchResults = res;
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
```

### Advanced Configuration

The fuzzySearch function accepts additional options for fine-tuning:

```typescript
import { ApiConfig, fuzzySearch, Query } from "search-fuzzy/dist/fuzzy";

const options = {
  threshold: 0.6,
  limit: 10,
};

fuzzySearch([], ["name", "email"], this.searchQuery, options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License.
