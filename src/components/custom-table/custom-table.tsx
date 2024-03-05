import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-table',
  styleUrl: 'custom-table.css',
  shadow: true,
})
export class CustomTable {
  @Prop() tableData?: any[]; // Define prop to receive data

  render() {
    return (
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>First Name</th>
              <th>Birthday</th>
              <th>Hometown</th>
            </tr>
          </thead>
          <tbody>
            {this.tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.name}</td>
                <td>{row.vorname}</td>
                <td>{row.birthday}</td>
                <td>{row.hometown}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
