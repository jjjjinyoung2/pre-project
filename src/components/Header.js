// import React from 'react';
// import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks';
import '@stackoverflow/stacks/dist/css/stacks.css';

import './Header.css';

// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';

// new StacksEditor(
//   document.querySelector('#editor-container'),
//   '*Your* **markdown** here'
// );

// const StyledHeader = styled.header`
//   background-color: #393939;
//   box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
//   display: grid;
//   grid-template-columns: 200px 1fr 200px;
//   grid-column-gap: 20px;
// `;

// const LogoLink = styled.a`
//   color: fff;
//   text-decoration: none;
//   display: inline-block;
//   height: 50px;
//   line-height: 50px;
//   padding: 0 15px;
//   svg {
//     margin-top: 7px;
//     display: inline-block;
//   }
//   b {
//     font-weight: normal;
//     display: inline-block;
//     margin-left: 2px;
//   }
// `;

function Header() {
  return (
    <header className="s-topbar">
      <a href="…" className="s-topbar--menu-btn">
        <i className="fa-solid fa-bars"></i>
      </a>
      <a href="…" className="s-topbar--logo">
        <i class="fa-brands fa-stack-overflow"></i>
      </a>
      {/* <a href="#" className="s-topbar--notice is-unread"> */}
      Product
      {/* </a> */}
      <ol className="s-navigation">
        <li>
          <a href="…" className="s-navigation--item">
            About
          </a>
        </li>
      </ol>
      <div class="s-topbar--searchbar--input-group">
        <input
          type="text"
          placeholder="Search…"
          value=""
          autocomplete="off"
          class="s-input s-input__search"
        />
      </div>
      <ol class="s-topbar--content">
        <li>
          <a
            href="…"
            class="s-topbar--item s-topbar--item__unset s-btn s-btn__filled"
          >
            Log in
          </a>
        </li>
        <li>
          <a
            href="…"
            class="s-topbar--item s-topbar--item__unset ml4 s-btn s-btn__primary"
          >
            Sign up
          </a>
        </li>
      </ol>
      <ol class="s-topbar--content">
        <li>
          <a href="…" class="s-topbar--item s-user-card s-user-card__small">
            …
          </a>
        </li>
        <li>
          <a href="…" class="s-topbar--item" aria-label="Inbox">
            @Svg.Inbox <span class="s-activity-indicator">…</span>
          </a>
        </li>
        <li>
          <a href="…" class="s-topbar--item">
            …
          </a>
        </li>
      </ol>
    </header>
    // <StyledHeader>
    //   <LogoLink href="https://stackoverflow.com" className="logo">
    //     <svg data-icon="Logo" className="native"></svg>
    //     <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
    //     Stack <b>Overflow</b>
    //   </LogoLink>

    //   <form action="" className="search">
    //     <input type="text" placeholder="Search..." />
    //   </form>
    //   {/* <a className="profile">Jin</a> */}
    // </StyledHeader>
  );
}
export default Header;
