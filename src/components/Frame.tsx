import './Frame.css';

export default function Frame({
    selectedType, selectedItem, selectedLanguage
}) {
    return (
        <div className="frames-container">
            <div className="visualization-frame">visualization</div>
            <div className="code-frame">code</div>
            <div className="explaination-frame">explaination</div>
        </div>
    );
}