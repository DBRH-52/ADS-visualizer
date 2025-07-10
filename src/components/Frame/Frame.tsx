import FrameView from './FrameView';

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
        <FrameView
            selectedType={selectedType}
            selectedItem={selectedItem}
            selectedLanguage={selectedLanguage}
        />
    );
}