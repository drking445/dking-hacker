import React from "react";
import logo from "../img/y.jpg";
import styled from "styled-components";
import Stories from "/stories.jsx";

type Props = {};

type StateProps = {
  searchItem: string,
  currentPage: number
};

class Nav extends React.Component<Props, StateProps> {
  constructor() {
    super();
    this.state = {
      searchItem: "newstories",
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  };

  changeData(data: string) {
    this.setState({ searchItem: data });
    console.log(data, "this is passed");
    console.log(this.state.searchItem, "this is saved to search item");
  }

  render() {
    return (
      <Container>
        <Resize>
          <NavBar>
            <Logo src={logo} alt="logo" />
            <div>
              &nbsp;<b>Hacker News</b>&nbsp;&nbsp;
            </div>
            {
              <Categories onClick={() => this.changeData("newstories")}>
                new &nbsp;|
              </Categories>
            }
            {
              <Categories onClick={() => this.changeData("paststories")}>
                &nbsp; past &nbsp;|
              </Categories>
            }
            {
              <Categories onClick={() => this.changeData("comments")}>
                &nbsp;comments &nbsp;|
              </Categories>
            }
            {
              <Categories onClick={() => this.changeData("askstories")}>
                &nbsp;ask &nbsp;|
              </Categories>
            }
            {
              <Categories onClick={() => this.changeData("showstories")}>
                &nbsp; show &nbsp;|
              </Categories>
            }
            {
              <Categories onClick={() => this.changeData("jobstories")}>
                &nbsp; jobs &nbsp;|
              </Categories>
            }
            {
              <Categories>
                <Anchor href="https://www.mcdonalds.com/us/en-us.html">
                  &nbsp;submit
                </Anchor>
              </Categories>
            }
          </NavBar>
          <Stories
            searchItem={this.state.searchItem}
            currentPage={this.state.currentPage}
          />
        </Resize>
        <Categories onClick={this.handleClick}>show more...</Categories>
        <div>
          Search:{" "}
          <input
            type="text"
            name="q"
            placeholder=""
            size="17"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="false"
          />
        </div>
      </Container>
    );
  }
}
export default Nav;

const Logo = styled.img`
  border: solid white 0.2px;
`;

const NavBar = styled.div`
  display: flex;
  place-content: center;
  items: center;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  place-content: flex-start;
  width: 100%;
  height: 25px;
  background-color: #f4783a;
`;

const Categories = styled.div`
  cursor: pointer;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resize = styled.div`
  width: 80%;
`;
