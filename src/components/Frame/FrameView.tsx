import './Frame.css';

import {getAlgorithmCode} from '../../../content/algorithms/index';
//import {getDataStructureCode} from '../../../content/data-structures/index';

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

    let code = '';
    if (selectedItem && selectedLanguage){
        code = getAlgorithmCode(selectedItem, selectedLanguage);
    }
    // else if (selectedType === 'data-structures') {
    //     code = getDataStructureCode(selectedItem, selectedLanguage);
    // }

    console.log('selectedType:', selectedType);
    console.log('selectedItem:', selectedItem);
    console.log('selectedLanguage:', selectedLanguage);
    console.log('code:', code);
    console.log('--------------------------------');

    return (
        <div className="frames-container">
            <div className="visualization-frame">visualization</div>

            <div className="code-frame">
                <pre>
                    <code>
                        {code}
                    </code>
                </pre>
            </div>

            <div className="explanation-frame">explanation</div>
        </div>
    );
}