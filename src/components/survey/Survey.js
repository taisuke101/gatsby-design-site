import React, { useEffect, useState } from "react"
import { FaVoteYea } from "react-icons/fa"

import Title from "../Title"
import base from "../Airtable"

import {
  Wrapper,
  Heading3,
  Heading4,
  ListContainer,
  List,
  Key,
  Paragraph,
  Button
} from './Survey.styled';

const Survey = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const getRecords = async () => {
    const records = await base('Survey')
      .select({})
      .firstPage()
      .catch( err => console.log(err))
    const newItems = records.map((record) => {
      const {id, fields} = record
      return {id, fields}
    })
    setItems(newItems);
    setLoading(false);
  }

  const giveVote = async id => {
    setLoading(true)
    const tempItems = [...items].map((item) => {
      if (item.id === id) {
        let { id, fields } = item;
        fields = {...fields, votes: fields.votes + 1}
        return { id, fields}
      }
      else {
        return item
      }
    })

    const records = await base ('Survey')
    .update(tempItems)
    .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record;
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <Wrapper className='section'>
      <Title title='survey'></Title>
      <Heading3>most inportant room in the house?</Heading3>
      {
        loading 
        ? (<Heading3>loading...</Heading3>)
        : (
          <ListContainer>
            {items.map(item => {
            const {
              id, 
              fields: {name, votes},
            } = item
            return (
              <List key={id}>
                <Key>
                  {name.toUpperCase().substring(0, 2)}
                </Key>
                <div>
                  <Heading4>{name}</Heading4>
                  <Paragraph>{votes} votes</Paragraph>
                  <Button onClick={() => giveVote(id)}>
                    <FaVoteYea />
                  </Button>
                </div>
              </List>
            )
          })}
          </ListContainer>)
      }
    </Wrapper>
  )
}


export default Survey
