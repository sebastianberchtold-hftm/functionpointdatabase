import { newSpecPage } from '@stencil/core/testing';
import { CustomTable } from '../custom-table';

describe('custom-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomTable],
      html: `<custom-table></custom-table>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-table>
    `);
  });
});
