```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Use useRef to manage the timeout ID
    timeoutRef.current = setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Use functional update to prevent stale closure
    }, 1000);

    // Cleanup function to clear the timeout on component unmount or update
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```