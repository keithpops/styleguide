import React from 'react';

const {
  Component,
} = React;

class Styleguide extends Component {

  listComponentTitles() {
    let children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");
      return (
        <li className={"py1 blue"}>
          <a href={"#"+title}>{child.props.title}</a>
        </li>
      );
    });
  }

  listComponents() {
    let children = this.props.children;
    let self = this;

    children = (React.Children.count(children) == 1) ? [children] : children;
    return React.Children.map(children, function (child) {
      let title = child.props.title.replace(" ", "-");

      return (
        <div className="styleguide-components-component py3" id={title}>
          <h2 className="styleguide-components-component-title">{child.props.title}</h2>
          <p className="styleguide-components-component-description">{child.props.description}</p>
          <div className="styleguide-components-component-example">{child.props.children}</div>
          {self.example(child)}
        </div>
      );
    });
  }

  example(child) {
    if (this.props.example) {
      return (
        <div className="styleguide-components-component-code">
          <pre>
            <code className={this.props.codeClassName ? this.props.codeClassName : "language-javascript"}>
              {this.props.highlight ? this.props.highlight(child.props.example) : child.props.example}
            </code>
          </pre>
        </div>
      );
    } else {
      void 0;
    }
  }

  render() {

    return (
      <div className="styleguide flex tall">
        <div className="styleguide-sidebar col-2 py5 px3 br bw-1 bc-grey-15">
          <h5 className="styleguide-sidebar-title grey-15 py2">{this.props.title}</h5>
          <ul className="styleguide-sidebar-list list-reset">{this.listComponentTitles()}</ul>
        </div>
        <div className="styleguide-components flex-auto overflow-scroll p4">{this.listComponents()}</div>
      </div>
    );
  }

}

Styleguide.displayName = "Styleguide";

export default Styleguide;
