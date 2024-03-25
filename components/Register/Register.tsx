'use client';

import React from 'react';

import {
    Container,
    Paper,
    TextInput,
    Button,
    Text,
    Box,
    Grid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAppDispatch } from '@/lib/hooks';
import { registerThunk } from '@/thunks/authorize-thunk';
// import { router } from 'next/client';

export function Register() {
    const dispatch = useAppDispatch();
    const form = useForm({
        initialValues: {
            registerInformation:
                {
                    username: '',
                    password: '',
                },
        },
    });
    const handleSubmit = async () => {
        const userData = { ...form.values.registerInformation };
        const action = registerThunk(userData);
        const resultAction = await dispatch(action);
    };

    return (
            <Container size="25rem" px={0}>
                <Box style={{ marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Text fz="xl" fw={500} ta="center">Sign up</Text>
                    <Paper style={{ marginTop: '16px', padding: 'md' }}>
                        <form
                          onSubmit={form.onSubmit(handleSubmit)}
                        >
                            <Grid gutter="md">
                                <Grid.Col span={12}>
                                    <TextInput
                                      required
                                      id="username"
                                      label="Email Address"
                                      autoComplete="email"
                                      placeholder="Email Address*"
                                      mb="md"
                                      {...form.getInputProps('registerInformation.username')}
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
                                      mb="md"
                                      {...form.getInputProps('registerInformation.password')}
                                    />
                                </Grid.Col>
                            </Grid>
                            <Button type="submit" style={{ width: '100%' }}>Sign Up</Button>
                            <Button
                              style={{ marginTop: '8px', width: '100%' }}
                              type="submit">
                                Back to Log In
                            </Button>
                        </form>
                    </Paper>
                </Box>
            </Container>
    );
}
