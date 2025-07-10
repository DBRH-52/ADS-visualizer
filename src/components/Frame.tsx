import './Frame.css';

type FrameProps = {
    selectedType: string;
    selectedItem: string;
    selectedLanguage: string;
}

export default function Frame({
    selectedType, 
    selectedItem, 
    selectedLanguage
}: FrameProps) {
    return (
        <div className="frames-container">
            <div className="visualization-frame">visualization</div>
            <div className="code-frame">code</div>
            <div className="explanation-frame">explanation</div>
        </div>
    );
}