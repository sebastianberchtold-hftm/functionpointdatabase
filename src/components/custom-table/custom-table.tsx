import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'custom-table',
  styleUrl: 'custom-table.css',
  shadow: true,
})
export class CustomTable {
  @Prop() tableData: any[] = [];
  @Event() rowDeleted: EventEmitter<number>;
  @Event() rowEdited: EventEmitter<number>;

  handleDeleteRow(index: number) {
    this.rowDeleted.emit(index);
  }

  handleEditRow(index: number) {
    this.rowEdited.emit(index);
  }

  render() {
    return (
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Name</th>
              <th>First Name</th>
              <th>Birthday</th>
              <th>Hometown</th>
            </tr>
          </thead>
          <tbody>
            {this.tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <button onClick={() => this.handleDeleteRow(rowIndex)} class="action-button">❌</button>
                  <button onClick={() => this.handleEditRow(rowIndex)} class="action-button">✏️</button>
                </td>
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
