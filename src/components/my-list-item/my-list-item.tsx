import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-list-item',
  styleUrl: 'my-list-item.scss',
  shadow: false,
  scoped: true,
})
export class MyListItem {
  @State() counter = 0;

  render() {
    return (
      <Host
        onClick={() => {
          this.counter = this.counter + 1;
        }}
        tabIndex={0}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <slot />
          <span>{this.counter}</span>
        </div>
      </Host>
    );
  }
}
