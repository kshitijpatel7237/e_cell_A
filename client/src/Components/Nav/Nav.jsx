import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const Nav = () => {
	const [sidebarOn, setSidebarOn] = useState(false)
	const toggleSidebar = () => {
		setSidebarOn(!sidebarOn)
		// console.log("toggle sidebar")
	}
	return (
		<>
			<Navbar sidebarOn={sidebarOn} onSidebarChange={toggleSidebar} />
			{ sidebarOn && <Sidebar sidebarOn={sidebarOn} onSidebarChange={toggleSidebar} />}
		</>
	)
}

export default Nav
