import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, setSortOrder } from './stackoverflow.actions';

const StackOverflow = ({ questions, loading, error, sortOrder, fetchQuestions, setSortOrder}) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query) {
            fetchQuestions(query);
        }
    }, [query, fetchQuestions]);

    const sortedQuestions = [...questions].sort((a, b) => {
        if (sortOrder === 'date') {
            return (b.creation_date || 0) - (a.creation_date || 0);
        } else if (sortOrder === 'reputation') {
            return (b.owner?.reputation || 0) - (a.owner?.reputation || 0);
        }
        return 0;
    });

    return (
        <div>
            <h2>StackOverflow Questions</h2> 
            <input 
                type="text" 
                placeholder="Search questions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="date">Sort by Date</option>
                <option value="reputation">Sort by Reputation</option>
            </select>
            {loading && <p>Loading...</p>}
            {error && <p>Error:</p>}
            <ul>
                {sortedQuestions.map((question) => (
                    <li key={question.question_id}>
                        <a href={question.link} target="_blank">
                            {question.title}
                        </a> - {question.owner.reputation}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    questions: state.stackoverflow.questions,
    loading: state.stackoverflow.loading,
    error: state.stackoverflow.error,
    sortOrder: state.stackoverflow.sortOrder,
});

const mapDispatchToProps = {
    fetchQuestions,
    setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);