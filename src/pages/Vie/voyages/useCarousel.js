import { useEffect, useState } from "react";

export default function useCarousel(images, delay = 5000) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, delay);

        return () => clearInterval(interval);
    }, [images, delay]);

    return images[index];
}
