import { Menu,MenuButton,MenuList,MenuItem } from "@chakra-ui/react"
import "./style.css"
export const Navbar = () => {
    return (
        <div className="navbar-main">
            <img className="nav-logo" src="https://www.datapine.com/images/logo-bl.png" alt="datapine-logo" />
            <div class="navbar-2">
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton className="navbar-prod">PRODUCT</MenuButton>
                        <MenuList>
                            <MenuItem>OVERVIEW</MenuItem>
                            <MenuItem>DATA CONNECTORS</MenuItem>
                            <MenuItem>SELF-SERVICE ANALYTICS</MenuItem>
                            <MenuItem>DASHBOARDS</MenuItem>
                            <MenuItem>DATA ALERTS</MenuItem>
                            <MenuItem>SHARE & REPORT</MenuItem>
                            <MenuItem>EMBEDDED ANALYTICS</MenuItem>
                            <MenuItem>DEMO DASHBOARDS</MenuItem>
                            <MenuItem>DATAPINE DIFFERENCE</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton>SOLUTIONS</MenuButton>
                        <MenuList>
                            <MenuItem>BY INDUSTRY</MenuItem>
                            <MenuItem>CONSTRUCTION</MenuItem>
                            <MenuItem>ENERGY</MenuItem>
                            <MenuItem>FINANCIAL SERVICES</MenuItem>
                            <MenuItem>HEALTHCARE</MenuItem>
                            <MenuItem>INSURANCE</MenuItem>
                            <MenuItem>LOGISTICS</MenuItem>
                            <MenuItem>MANUFACTURING</MenuItem>
                            <MenuItem>MARKET RESEARCH</MenuItem>
                            <MenuItem>MEDIA</MenuItem>
                            <MenuItem>RETAIL</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton>SERVICES</MenuButton>
                        <MenuList>
                            <MenuItem>POC</MenuItem>
                            <MenuItem>BI CONSULTING</MenuItem>
                            <MenuItem>ETL AS A SERVICE</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton>LEARN</MenuButton>
                        <MenuList>
                            <MenuItem>DOCUMENTATION</MenuItem>
                            <MenuItem>VIDEOS & TUTORIALS</MenuItem>
                            <MenuItem>KPI EXAMPLES</MenuItem>
                            <MenuItem>DATA WAREHOUSE</MenuItem>
                            <MenuItem>DATA SECURITY</MenuItem>
                            <MenuItem>ARTICLES & GUIDES</MenuItem>
                            <MenuItem>BLOG</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton>COMPANY</MenuButton>
                        <MenuList>
                            <MenuItem>ABOUT US</MenuItem>
                            <MenuItem>CAREER</MenuItem>
                            <MenuItem>NEWS</MenuItem>
                            <MenuItem>PARTNER PROGRAM</MenuItem>
                            <MenuItem>BECOME A PARTNER</MenuItem>
                            <MenuItem>CUSTOMER</MenuItem>
                            <MenuItem>CONTACT US</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="navbar-menu">
                    <Menu isLazy>
                        <MenuButton>EN</MenuButton>
                        <MenuList>
                            <MenuItem>DE</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <button class="nav-btn">LOGIN</button>
            </div>
        </div>
    )
}