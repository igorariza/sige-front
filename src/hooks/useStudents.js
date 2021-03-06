import { useState, useEffect } from 'react';

const useStudents = (API) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch(API)
      .then(res => res.json())
        .then(response => {
          setStudents(response)
          setLoading(false)
        });
  }, []);
  return {students, loading};
}
export default useStudents;