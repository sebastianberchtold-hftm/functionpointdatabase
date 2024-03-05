import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'custom-form',
  styleUrl: 'custom-form.css',
  shadow: true,
})
export class CustomForm {
  @Event() formDataSubmitted: EventEmitter;

  handleSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    this.formDataSubmitted.emit(formDataObject);
    console.log('Form data:', formDataObject);
    // You can perform any action with the form data here, such as sending it to a server
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} class="custom-form">
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="form-group">
          <label htmlFor="vorname">Vorname:</label>
          <input type="text" id="vorname" name="vorname" />
        </div>
        <div class="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" />
        </div>
        <div class="form-group">
          <label htmlFor="hometown">Hometown:</label>
          <input type="text" id="hometown" name="hometown" />
        </div>
        <div class="button-group">
          <button type="submit">Save</button> {/* Set type to "submit" */}
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}
