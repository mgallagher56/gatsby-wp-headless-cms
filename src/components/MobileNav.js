
import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import logo from '../assets/images/gatsby-icon.png';
import { useStaticQuery, graphql } from "gatsby"
import Bubbles from "./Bubbles";

const MobileNav = () => {
    const navData = useStaticQuery(graphql`
    query GET_NAV {
        allWpMenuItem {
          totalCount
          edges {
            node {
              label
              url
            }
          }
        }
      }
    `)
    

    let navOutput = ( data ) => {
        return <>
            { data.allWpMenuItem.edges.map( ( node ) => {
                if (node.node.url ==='/home/') {
                    let url = '/';
                    return <>
                        <li className={'menu-item col-6 ' . toLowerCase(node.node.label)}>
                            <AniLink fade duration={1}
                                color='mediumspringgreen' to={url}
                                className='nav-link'>
                                <p>{node.node.label}</p>
                            </AniLink>
                        </li>
                    </>
                } else  {
                    return <>
                    <li className={'menu-item col-6 ' . toLowerCase(node.node.label)}>
                        <AniLink fade duration={1}
                            color='mediumspringgreen' to={url}
                            className='nav-link'>
                            <p>{node.node.label}</p>
                        </AniLink>
                    </li>
                </>
                }
            })}
        </>
    }

    let mobileNavStyle = {
        height: `calc(100vh - 78px)`,
    };


    return (
        <ul style={mobileNavStyle} ref={this.nav}
        className={`navbar-mobile row flex-row flex-wrap m-0 w-100 position-fixed ${this.state.menuToggle ? 'open' : ''}`}>
            <Bubbles />
                { navOutput( navData )}
        </ul>
    )
  }

  export default MobileNav