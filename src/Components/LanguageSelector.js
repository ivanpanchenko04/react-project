import React from 'react';

export default function LanguageSelector({ onSelectLanguage }) {
    return (
        <div className="mt-3">
            <select onChange={(e) => onSelectLanguage(e.target.value)}>
                <option value="En">English</option>
                <option value="Ua">Українська</option>
            </select>
        </div>
    );
}
