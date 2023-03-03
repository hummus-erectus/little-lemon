import { useState } from "react"
import TabItem from "./TabItem"

function Tabs ({ list, activeTab, onTabSwitch}) {
    let active = activeTab === '' ? list[0] : activeTab
    console.log(active)
    return (
        <div className="tabs-wrapper">
            <div className="tabs-container">
                {list.map((item, index) => {
                    return (
                        <TabItem
                            title={item}
                            key={index}
                            index={index}
                            active={active === item}
                            setActive={onTabSwitch}
                            />
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs