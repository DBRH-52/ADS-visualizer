import './Dropdowns.css';

type DropdownViewProps = {
    pageType: 'algorithms' | 'data-structures';
    onTypeChange: (value: string) => void;
    onItemChange: (value: string) => void;
    onLanguageChange: (value: string) => void;
    selectedType: string;
    selectedItem: string;
    selectedLanguage: string;
    getTypeOptions: () => Array<{value: string, label: string}>;
    getItemOptions: () => string[];
    languages: string[];
}

export default function DropdownsView({
    pageType,
    onTypeChange,
    onItemChange,
    onLanguageChange,
    selectedType,
    selectedItem,
    selectedLanguage,
    getTypeOptions,
    getItemOptions,
    languages
}: DropdownViewProps) {
    return (
        <div className="dropdowns-container">
          <select 
            className="dropdown"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <option value="">
              {pageType === 'algorithms' ? 'algorithm type' : 'data structure type'}
            </option>
            {getTypeOptions().map(option => (
              <option 
                key={option.value} 
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
    
          <select 
            className="dropdown"
            value={selectedItem}
            onChange={(e) => onItemChange(e.target.value)}
          >
            <option value="">
              {pageType === 'algorithms' ? 'algorithm' : 'data structure'}
            </option>
            {getItemOptions().map(item => (
              <option 
                key={item} 
                value={item}
              >
                {item.replace('-', ' ')}
              </option>
            ))}
          </select>

          <select 
            className="dropdown"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            <option value="">
              language
            </option>
            {languages.map(lang => (
              <option 
                key={lang} 
                value={lang}
              >
                {lang}
              </option>
            ))}
          </select>
        </div>
      );
}