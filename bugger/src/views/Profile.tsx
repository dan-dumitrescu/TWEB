import React, { useState } from 'react';
import { Container, Box, Avatar, Typography, Button, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { Edit as EditIcon, Add as AddIcon, Folder as FolderIcon } from '@mui/icons-material';

const ProfilePage: React.FC = () => {
  const user = {
    name: 'Dumitrescu Dan',
    email: 'dand0509@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  };

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
    // ... more projects
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Uploading', file.name);
      const newProject = {
        id: projects.length + 1,
        name: file.name, // You might want to extract a more meaningful name
        description: 'Newly uploaded project'
      };

      // Update the projects state with the new project
      setProjects([...projects, newProject]);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Avatar
            alt={user.name}
            src={user.avatarUrl}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography component="h1" variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {user.email}
          </Typography>
          {/* Profile edit button (optional) */}
          {/* <Button variant="outlined" startIcon={<EditIcon />} sx={{ alignSelf: 'flex-start' }}>
            Edit Profile
          </Button> */}
        </Box>

        {/* Projects list */}
        <Typography component="h2" variant="h6" sx={{ mt: 4 }}>
          My Projects
        </Typography>
        <List>
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={project.name} secondary={project.description} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>

        {/* Upload new project */}
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            variant="contained"
            component="label"
            startIcon={<AddIcon />}
          >
            Upload New Project
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
