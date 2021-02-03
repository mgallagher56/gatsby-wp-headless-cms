
import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from "gatsby"
import Bubbles from "./Bubbles";

const MobileNavItems = () => {
    const navData = useStaticQuery(graphql`
    query GET_MOBILE_N {
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
                        <li className={'menu-item col-6 ' + node.node.label}>
                            <AniLink fade duration={1}
                                color='mediumspringgreen' to={url}
                                className='nav-link'>
                                <p>{node.node.label}</p>
                            </AniLink>
                        </li>
                    </>
                } else  {
                    return <>
                    <li className={'menu-item col-6 ' + node.node.label}>
                        <AniLink fade duration={1}
                            color='mediumspringgreen' to={node.node.url}
                            className='nav-link'>
                            <p>{node.node.label}</p>
                        </AniLink>
                    </li>
                </>
                }
            })}
        </>
    }

    return ( 
        <>
            <Bubbles />
            { navOutput( navData )}
        </>
    )
  }

  export default MobileNavItems