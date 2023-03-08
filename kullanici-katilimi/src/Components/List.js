import React from 'react'

const List = ({registerMember}) => {
    let listMembers = registerMember.map((item,index) => {
        return(
            <div className='list-wrapper login-form p-3 border border-primary-subtle rounded shadow' key={index}>
            <p className='member-list' key={index}>
                {item.id} Id Numaralı {item.name} isimli kullanıcı aramıza hoşgeldin dostum.
            </p>
            </div>
        )
    })
  return (
    <div>{listMembers}</div>
  )
}

export default List