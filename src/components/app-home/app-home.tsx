import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() tableData: any[] = [
    { name: 'John', vorname: 'Doe', birthday: '1990-01-01', hometown: 'New York' },
    { name: 'Alice', vorname: 'Smith', birthday: '1995-05-15', hometown: 'Los Angeles' },
    { name: 'Bob', vorname: 'Johnson', birthday: '1985-11-30', hometown: 'Chicago' },
  ];

  handleRowDeleted(event: CustomEvent<number>) {
    const index = event.detail;
    this.tableData = this.tableData.filter((_, i) => i !== index);
  }

  handleRowEdited(event: CustomEvent<number>) {
    // Handle row editing logic here
    const index = event.detail;
    console.log('Row edited at index:', index);
  }

  handleFormDataSubmitted = (event: CustomEvent) => {
    const formData = event.detail;
    const updatedTableData = [...this.tableData, formData];
    this.tableData = updatedTableData;
  };

  render() {
    return (
      <div class="app-container">
        <custom-form onFormDataSubmitted={this.handleFormDataSubmitted}></custom-form>
       <custom-table
          tableData={this.tableData}
          onRowDeleted={this.handleRowDeleted}
          onRowEdited={this.handleRowEdited}
        ></custom-table>
      </div>
    );
  }
}
