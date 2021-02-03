
import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import logo from '../assets/images/gatsby-icon.png';
import { useStaticQuery, graphql } from "gatsby"

const DesktopNav = () => {
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
                        <li>
                            <AniLink 
                                paintDrip 
                                duration={1} 
                                color='mediumspringgreen' 
                                to={url}
                                className='nav-link'>
                                <img src={logo} alt='Logo'></img>
                                </AniLink>
                        </li>
                    </>
                } else  {
                    return <li><AniLink paintDrip duration={1} color='mediumspringgreen' to={node.node.url}
                    className='nav-link'> {node.node.label} </AniLink></li>
                }
            })}
        </>
    }


    return (
        <nav className={'container'}>
            <ul className='navbar-nav mr-auto navbar-desktop d-none d-md-flex flex-row justify-content-around'>
                { navOutput( navData )}
            </ul>
        </nav>
    )
  }

  export default DesktopNav