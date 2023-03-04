import React from 'react'

export default function StatCard({value,title }) {
  return (
    <div>
      <p>
        <i>{ value}</i>
      </p>
      <p>
        <i>{ title}</i>
      </p>
    </div>
  );
}
