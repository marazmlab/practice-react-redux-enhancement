import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, setFilter } from './github.actions';

const GitHub = ({ repos, loading, error, filter, fetchRepos, setFilter }) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (userName) {
            fetchRepos(userName);
        }
    }, [userName, fetchRepos]);

    const filteredRepos = repos.filter((repo) => 
        repo.name.toLowerCase().includes((filter.toLowerCase() || '').toLowerCase())
    );

    return (
        <div>
            <h2>GitHub Repositories</h2>
            <input
                type="text"
                placeholder="GitHub username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Filter repositories"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {filteredRepos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStatetoProps = (state) => ({
    repos: state.repos,
    loading: state.loading,
    error: state.error,
    filter: state.filter,
});

const mapDispatchToProps ={
    fetchRepos,
    setFilter,
};

export default connect(mapStatetoProps, mapDispatchToProps)(GitHub);