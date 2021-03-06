import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import crown from "../resources/crown.svg"
import User from "./User"
import { unescapeText } from "../utils"

const UserListContainer = styled.div`
  flex: 0 0 auto;
  width: 240px;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  background: #2f3136;
  padding: 8px 0;
`

const UserListMember = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 1px 8px;

  &:hover {
    background: #36393f;
  }

  & ${User} {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const UserListCrown = styled.img.attrs({
  src: crown,
  width: 14,
  height: 14,
  alt: "King"
})`
  margin-left: 4px;
`

const UserList = () => {
  let usrs = useSelector(({ users }) => users)

  return (
    <UserListContainer>
      {usrs.map(({ nick, color, key }, i) => (
        <UserListMember key={key}><User color={color}>{unescapeText(nick)}</User>{i === 0 ? (<UserListCrown />) : null}</UserListMember>
      ))}
    </UserListContainer>
  )
}

export default UserList
