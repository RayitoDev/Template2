'use client';
import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    IconButton,
    Typography,
    InputAdornment
} from '@mui/material';  
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { useToast } from '@/hooks';
import { email as emailValidation } from '@/library/validations/methods';
import { useSpinnerContext } from '@/components/spinner/contexts';
import type { InputChangeEventProps } from '@/types';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';

function Default() {
    const router = useRouter();
    const showToast = useToast();
    const { setOpen } = useSpinnerContext();
    const { user, login } = useAuth();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState({
        email: false,
        password: false
    });
    const [ helperText, setHelperText ] = useState<{
        email: string | null;
        password: string | null;
    }>({
        email: null,
        password: null
    });
    const [ showPassword, setShowPassword ] = useState(false);
    const [ loadingSignIn, setLoadingSignIn ] = useState(false);
    
    const handleChangeEmail = (event: InputChangeEventProps) => {
        const value = event.target.value.toUpperCase();
        setEmail(value);
    };

    const handleChangePassword = (event: InputChangeEventProps) => {
        setPassword(event.target.value);
        if(event.target.value) {
            setError((prevError) => ({
                ...prevError,
                password: false
            }));

            setHelperText((prevHelperText) => ({
                ...prevHelperText,
                password: null
            }));
        };
    };

    
    const handleSignIn = async () => {
        let isValid = true;

        if (!email) {
            setError((prevError) => ({
                ...prevError,
                email: true
            }));
            setHelperText((prevHelperText) => ({
                ...prevHelperText,
                email: 'El campo correo electrónico es obligatorio'
            }));
            isValid = false;
        } else {
            const validation = emailValidation(email);
            setError((prevError) => ({
                ...prevError,
                email: !validation.isValid
            }));
    
            setHelperText((prevHelperText) => ({
                ...prevHelperText,
                email: validation.helperText
            }));
            isValid = validation.isValid;
           
        }

        if (!password) {
            setError((prevError) => ({
                ...prevError,
                password: true
            }));
            setHelperText((prevHelperText) => ({
                ...prevHelperText,
                password: 'El campo contraseña es obligatorio'
            }));
            isValid = false;
        }

        if(isValid) {
            try {
                setOpen(true);
                setLoadingSignIn(true);
                await login(email, password).then(() => {
                    setOpen(false);
                    setLoadingSignIn(false);
                }).catch(() => {
                    setOpen(false);
                    setLoadingSignIn(false);
                    showToast({
                        message: 'Ocurrió un error al autenticarse', 
                        position: 'top-right', 
                        type: 'error' 
                    });
                }); 
            } catch {
                setOpen(false);
                setLoadingSignIn(false);
                showToast({
                    message: 'Ocurrió un error al autenticarse',
                    position: 'top-right',
                    type: 'error'
                });
            };  
        };
    };

    useEffect(() => {
        if(user) {
            router.push('/home');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <Box
                sx={{
                    gap: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 5,
                }}
            >
                <Typography variant="h5">Iniciar Sesión</Typography>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    ¿No tienes una cuenta?
                    <Link variant="subtitle2" sx={{ ml: 0.5 }}>
                      Registrarse
                    </Link>
                </Typography> */}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                }}
            >
                <TextField
                    fullWidth
                    label="Correo electrónico"
                    placeholder="Ingrese su correo electrónico"
                    type="email"
                    variant="outlined"
                    color='primary'
                    size='medium'
                    value={email}
                    onChange={(event) => handleChangeEmail(event)}
                    error={error.email}
                    helperText={helperText.email}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleSignIn();
                        }
                    }}
                    sx={{ mb: 3 }}
                    required
                />

                {/* <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
                    ¿Has olvidado tu contraseña?
                </Link> */}

                <TextField
                    fullWidth
                    label="Contraseña"
                    placeholder="*******"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    size='medium'
                    value={password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(event) => handleChangePassword(event)}
                    error={error.password}
                    helperText={helperText.password}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleSignIn();
                        }
                    }}
                    sx={{ mb: 3 }}
                />

                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="inherit"
                    onClick={handleSignIn}
                    endIcon={<LoginIcon />}
                    loading={loadingSignIn}
                    loadingPosition='end'
                >
                    Iniciar Sesión
                </Button>
            </Box>
        </>
    );
}

export default Default;