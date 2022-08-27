import ReactSlider from "react-slider";


function Settings() {
    return (
        <div
        style={{textAlign: 'left'}}>
            <label>Work minutes:</label>
            <ReactSlider className={"slider"} thumbClassName={"thumb"} trackClassName={"track"} value={45} min={1} max={120}
            />
            <label>Break minutes:</label>
            </div>
    )
}

export default Settings;