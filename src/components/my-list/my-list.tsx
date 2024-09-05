import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-list',
  styleUrl: 'my-list.scss',
  shadow: false,
  scoped: true,
})
export class MyList {
  @State() totalCounter = 0;

  render() {
    return (
      <Host data-counter={this.totalCounter} onClick={() => (this.totalCounter = this.totalCounter + 1)}>
        <slot />
      </Host>
    );
  }
}
