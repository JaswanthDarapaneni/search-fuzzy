# Search-Fuzzy

## Overview

Search-Fuzzy is a powerful utility for searching specific data in large datasets. It provides a fuzzy search functionality that allows you to search for data by providing a query string and a set of fields to search in. The utility returns an array of objects that match the query, making it ideal for implementing search features in various applications.

## Installation

To install Search-Fuzzy, use npm:

```bash
npm install search-fuzzy
```

## React Integration

Here's an example of how to integrate Search-Fuzzy into a React application:

```jsx
import React, { useState, useEffect } from "react";
import { fuzzySearch } from "search-fuzzy/fuzzy/fuzzy";

const TestSearch = () => {
  const [query, setQuery] = useState({ query: "" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fields = [];
  const apiConfig = {
    url: "https://jsonplaceholder.typicode.com/posts",
    useApi: true,
    headers: {
      Authorization: "Bearer your-token",
      Accept: "application/json",
      "Custom-Header": "custom-value",
    },
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.query.trim() !== "") {
        setLoading(true);
        const fetchResults = async () => {
          try {
            const response = await fuzzySearch([], fields, query, apiConfig, { maxResults: 10 });
            setResults(response);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
        fetchResults();
      } else {
        setResults([]);
      }
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      <input
        type="text"
        value={query.query}
        onChange={(e) => setQuery({ query: e.target.value })}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      {results.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        query.query.trim() !== "" && <p>No results found.</p>
      )}
    </div>
  );
};

export default TestSearch;
```

## JavaScript Integration

Here's how to use Search-Fuzzy in a JavaScript environment:

```javascript
const { fuzzySearch } = require("search-fuzzy/fuzzy/fuzzy");

const data = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
];

fuzzySearch(data, ["name", "age"], { query: "jane" }).then((res) => {
  console.log(res);
  // Output: [{ name: "Jane", age: 21 }, { name: "John", age: 20 }]
});
```

## Angular Integration

To integrate Search-Fuzzy with an Angular application, follow these steps:

1. Import the necessary modules:

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { fuzzySearch, Query } from "search-fuzzy/fuzzy/fuzzy";
```

2. Create a component that uses the Search-Fuzzy utility:

```typescript
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
    });
  }
}
```

## API Configuration

For API integration, you can use the following configuration:

```typescript
const apiConfig = {
  url: "https://jsonplaceholder.typicode.com/posts",
  useApi: true,
  headers: {
    Authorization: "Bearer your-token",
    Accept: "application/json",
    "Custom-Header": "custom-value",
  },
  params: {
    id: 1,
  },
};

fuzzySearch([], fields, query, apiConfig, { maxResults: 3 })
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Advanced Configuration

The fuzzySearch function accepts additional options for fine-tuning:

```typescript
const options = {
  threshold: 0.6,
  limit: 10,
};

fuzzySearch([], ["name", "email"], searchQuery, options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
```

This README provides a comprehensive guide to using the Search-Fuzzy utility in various environments, including React, plain JavaScript, and Angular. It covers installation, basic usage, API configuration, and advanced options.
