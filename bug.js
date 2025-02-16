```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is the problematic line: calling setCount from within a setTimeout in useEffect
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```