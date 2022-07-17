import React from "react";

import { Tabs } from "@mantine/core";

import { Photo, MessageCircle, Settings } from "tabler-icons-react";

import {
  BsFillFolderFill,
  BsInfoSquareFill,
  BsFillChatRightTextFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

function Nav() {
    return (
      <Tabs>
        <Tabs.Tab label="About" icon={<BsInfoSquareFill size={14} />}>
          Gallery tab content
        </Tabs.Tab>
        <Tabs.Tab label="Portfolio" icon={<BsFillFolderFill size={14} />}>
          Settings tab content
        </Tabs.Tab>
        <Tabs.Tab label="Contact" icon={<BsFillChatRightTextFill size={14} />}>
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab
          label="Resume"
          icon={<BsReverseLayoutTextSidebarReverse size={14} />}
        >
          Settings tab content
        </Tabs.Tab>
      </Tabs>
    );
  
  
  // return (
  //   <div>
  //       <a href="/About">About Me</a>
  //       <a href="/Portfolio">Portfolio</a>
  //       <a href="/Contact">Contact</a>
  //       <a href="/Resume">Resume</a>
  //   </div>
  // );
}

export default Nav;
