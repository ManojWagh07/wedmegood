import React from 'react'
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from 'mdb-react-ui-kit';
const header = () => {
  return (
    <div className=''>
        <div className='header'>
            <h2>Plan a Mumbai Wedding</h2>
            <img src="./Image/delhi_bg.jpg" alt="" />
        </div>
   
        <div className='inpute'>
          
        <MDBDropdown className='position-static'>
            <div className='search'>
              <MDBDropdownToggle tag='a' className='nav-link' >
                
                Find Vendors in Mumbai
               
              </MDBDropdownToggle>
              </div>
                <MDBDropdownMenu  className='justify-content-center' >
                <MDBContainer className='dropdown'>
                  <MDBRow className='my-4' >
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0' >
                      <MDBListGroup flush className='m0' >
                        <MDBListGroupItem tag='a' href='#' action className='heading'>
                          Top Cities
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Delhi
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Mumbai
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        Bangalore
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        Hyderabad
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        Chennai
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        Pune
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        Kolkatta
                        </MDBListGroupItem> <MDBListGroupItem tag='a' href='#' action>
                        Lucknow
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action className='heading'>
                          Popular Cities
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Perspiciatis quo
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laudantium maiores
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Provident dolor
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action className='heading'>
                          Iste quaerato
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Est iure
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Praesentium
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laboriosam
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action className='heading'>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Saepe
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Vel alias
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Sunt doloribus
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cum dolores
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
             
            </MDBDropdown>        </div>
    </div>
  )
}

export default header