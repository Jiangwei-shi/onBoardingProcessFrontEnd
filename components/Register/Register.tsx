'use client';

import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextInput,
    Button,
    Text,
    Box,
    Grid,

} from '@mantine/core';
import { router } from 'next/client';

export function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    });
    const { email, password } = formData;
    // const [open, setOpen] = useState(false);
    // const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        // if (email !== confirmEmail) {
        //     alert('Emails do not match.');
        //     return;
        // }
        //
        // if (password !== confirmPassword) {
        //     alert('Passwords do not match.');
        //     return;
        // }

        // const userData =
        //     { username: email,
        //                 password,
        //         firstName: firstname,
        //         lastName: lastname };
        // const action = registerThunk(userData);
        // const resultAction = await dispatch(action);
        //
        // if (registerThunk.rejected.match(resultAction)) {
        //     const errorMessage = resultAction.error.message;
        //     setModalMessage(errorMessage === 'User already exist' ? 'The ' +
        //         'username has been used.' : 'Registration failed. Please try again.');
        //     setOpen(true);
        // } else {
        //     setModalMessage('You have successfully registered.');
        //     setOpen(true);
        // }
    };

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
            <Container size="25rem" px={0}>
                <Box style={{ marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Text fz="xl" fw={500} ta="center">Sign up</Text>
                    <Paper style={{ marginTop: '16px', padding: 'md' }}>
                        <form onSubmit={handleSubmit}>
                            <Grid gutter="md">
                                <Grid.Col span={12}>
                                    <TextInput
                                      required
                                      id="email"
                                      label="Email Address"
                                      autoComplete="email"
                                      placeholder="Email Address*"
                                      value={email}
                                      onChange={handleChange}
                                      mb="md"
                                    />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <TextInput
                                      required
                                      type="password"
                                      id="password"
                                      label="Password"
                                      autoComplete="new-password"
                                      placeholder="Password*"
                                      value={password}
                                      onChange={handleChange}
                                      mb="md"
                                    />
                                </Grid.Col>
                            </Grid>
                            <Button type="submit" style={{ width: '100%' }}>Sign Up</Button>
                            <Button
                              style={{ marginTop: '8px', width: '100%' }}
                              onClick={() => router.push('/login')}>Back to Log In
                            </Button>
                        </form>
                    </Paper>
                </Box>
            </Container>
    );
}
