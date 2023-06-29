import React from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/languages";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "list",
      langs: LANGUAGES,
    };
  }
  addLang(lang) {
    this.setState({
      langs: [...this.state.langs, lang],
      tab: "list",
    });
  }
  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
            <li onClick={() => this.setState({ tab: "form" })}>フォーム</li>
          </ul>
        </header>
        <hr />
        {tab === "list" ? (
          <List langs={langs} />
        ) : (
          <Form onAddLang={(lang) => this.addLang(lang)} />
        )}
      </div>
    );
  }
}
export default App;
