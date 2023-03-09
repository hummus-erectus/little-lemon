import TabItem from "./TabItem"

function Tabs ({ list, activeTab, onTabSwitch, type }) {
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
                            imgSrc={`${process.env.PUBLIC_URL}\\images\\${item}.jpg`}
                            type={type}
                            />
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs