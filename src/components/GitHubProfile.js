import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/github-john-doe')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Erreur lors de la récupération du profil GitHub:', error));
  }, []);

  if (!profile) return <p>Chargement...</p>;

  return (
    <div className="github-profile">
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
      <img src={profile.avatar_url} alt={profile.name} width="150" />
    </div>
  );
}

export default GitHubProfile;
