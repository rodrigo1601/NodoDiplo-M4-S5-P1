import { useState } from "react";

export const useTagList = (initialTags = []) => {
    const [input, setInput] = useState("");
    const [tags, setTags] = useState(initialTags);

    const add = () => {
        if (!input.trim()) return;
        setTags(prev => [...prev, input.trim()]);
        setInput("");
    };

    const remove = (index) => {
        setTags(prev => prev.filter((_, i) => i !== index));
    };

    const init = (newTags = []) => setTags(newTags);

    return { input, setInput, tags, add, remove, init };
};