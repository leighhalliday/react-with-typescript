import React from 'react'
import { Link } from 'gatsby'

interface Props {
  siteTitle: string
  subTitle?: string
}

export default class Header extends React.Component<Props> {
  render() {
    const { siteTitle, subTitle } = this.props

    return (
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {subTitle && <h2>{subTitle}</h2>}
      </div>
    )
  }
}
