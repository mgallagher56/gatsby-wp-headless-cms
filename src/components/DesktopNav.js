
import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import "./layout.css"
import logo from '../assets/images/gatsby-icon.png';
import { useStaticQuery, graphql } from "gatsby"
import { render } from "react-dom";

const DesktopNav = () => {
    const navData = useStaticQuery(graphql`
    query GET_NAV {
        allWpPage {
          edges {
            node {
              title
              slug
              uri
            }
          }
        }
      }
    `)

    let navOutput = ( data ) => {
        return <>
        { data.allWpPage.edges.reverse().map( ( node ) => {
            return <li><AniLink paintDrip duration={1} color='mediumspringgreen' to={node.node.uri}
            className='nav-link'> {node.node.title} </AniLink></li>
        })}
        </>
    }


    return (
        <nav>
            <ul className='navbar-nav mr-auto navbar-desktop d-none d-md-flex flex-row justify-content-around'>
                <img src={logo} alt='Logo'></img>
                { navOutput( navData )}
            </ul>
        </nav>
    )
  }

  export default DesktopNav