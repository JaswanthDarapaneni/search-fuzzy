# FuzzySearch Angular Integration

## Overview

This project demonstrates the integration of the powerful `fuzzySearch` utility with Angular applications. It provides a robust mechanism for performing fuzzy searches on datasets, allowing for approximate matches in both local and remote data.

## Installation

### 1. Install the fuzzy-search package

```bash
npm install fuzzy-search
```
2. Add to your Angular project
In your Angular project, import the fuzzySearch function where needed:

``` typescript
import { fuzzySearch } from 'fuzzy-search';
```
* Usage Example

``` typescript 
const result = fuzzySearch(data, fields, query, apiConfig);
```
### Parameters:

data: Array<Object>
An array of objects to search through.

fields: Array<string>
An array of string field names to search within each object.

query: string
The search query string.

apiConfig: Object (Optional)

### Configuration for API-based searching.
``` typescript
import { Component } from '@angular/core';
import { fuzzySearch } from 'fuzzy-search';

@Component({
  selector: 'app-search',
  template: `
    <input [(ngModel)]="searchQuery" (input)="onSearch()">
    <ul>
      <li *ngFor="let result of searchResults">{{ result.name }}</li>
    </ul>
  `
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // ... more data
  ];

  onSearch() {
    this.searchResults = fuzzySearch(this.data, ['name', 'email'], this.searchQuery);
  }
}
```
### API Integration

``` typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fuzzySearch } from 'fuzzy-search';

@Component({
  selector: 'app-api-search',
  template: `
    <input [(ngModel)]="searchQuery" (input)="onSearch()">
    <ul>
      <li *ngFor="let result of searchResults">{{ result.title }}</li>
    </ul>
  `
})
export class ApiSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.http.get('https://api.example.com/data').subscribe(
      (data: any) => {
        this.searchResults = data;
      }
    );
  }

  onSearch() {
    const apiConfig = {
      url: 'https://api.example.com/search',
      method: 'GET',
      params: { q: this.searchQuery }
    };

    fuzzySearch([], ['title', 'description'], this.searchQuery, apiConfig)
      .then(results => {
        this.searchResults = results;
      });
  }
}

```

### Advanced Configuration
The fuzzySearch function accepts additional options for fine-tuning:

``` typescript
const options = {
  threshold: 0.6,
  limit: 10
};

const result = fuzzySearch(data, fields, query, apiConfig, options);
```

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### License
This project is licensed under the MIT License.

