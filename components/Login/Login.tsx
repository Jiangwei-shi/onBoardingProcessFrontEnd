import React from 'react';
import {
    Container,
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Text,
    // Anchor,
    // // Divider,
    // Group,
} from '@mantine/core';
// import {BrandGoogle} from 'tabler-icons-react';
/**
 * Login component for user authentication.
 *
 * This component allows users to log in to the application. It includes
 * input fields for username and password, and a submit button that triggers
 * the login process. The component also displays any login errors and provides
 * links for account creation and password recovery.
 *
 * @return {JSX.Element} The rendered login component.
 */
export function Login() {
    return (
        <Container
          size="xs"
          p={60}
          my={32}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex',
justifyContent: 'center',
                marginBottom: '30px' }}>
            </div>

            <Paper withBorder shadow="sm" p={40} my={30} radius="md">

                <form>
                    <TextInput
                      label="Username"
                      placeholder="you@mantine.dev"
                      required
                      // value={}
                      // onChange={}
                    />
                    <PasswordInput
                      label="Password"
                      mt={20}
                      placeholder="Your password"
                      required
                      // value={password}
                      // onChange={handlePasswordChange}
                    />
                    <Button fullWidth mt={40} type="submit">
                        log in
                    </Button>
                </form>
            </Paper>

            <Text size="sm" mt={5}>
                {/*Do not have an account yet?{' '}*/}
                {/*<Anchor size="sm" onClick={() => navigate('/signup')}>*/}
                {/*    Create account*/}
                {/*</Anchor>*/}
            </Text>
            {/* <Text color="dimmed" size="sm" align="center" mt={5}>
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Text> */}
            {/* <Divider my="lg" label="or" labelPosition="center" /> */}
            {/*<Group position="center">*/}
                {/* <Button leftIcon={<BrandGoogle />} variant="white" align="center">
          Connect to google
        </Button> */}
            {/*</Group>*/}
        </Container>
    );
}
