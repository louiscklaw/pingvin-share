import { Button, Container, createStyles, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Meta from '../components/Meta';
import useUser from '../hooks/user.hook';
import useConfig from '../hooks/config.hook';
// import { QRCodeSVG } from 'qrcode.react';
// import QRCodeStyling from 'qr-code-styling';
import ClientQR from './ClientQR';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: `calc(${theme.spacing.md} * 4)`,
    paddingBottom: `calc(${theme.spacing.md} * 4)`,
  },

  content: {
    // maxWidth: 480,
    maxWidth: '500px',

    // marginRight: `calc(${theme.spacing.md} * 3)`,
    marginRight: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '2rem',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () =>
    modals.openConfirmModal({
      title: 'How to use this?',
      children: (
        <>
          <Text size="sm">This is a easy file sharing between you and louis.</Text>

          <Text size="sm">
            Just click "Go Upload", You will be redirect to the upload page. Select the file(s) you want to share, and
            then tap "Upload"
          </Text>

          <Text size="sm">
            A dialogue prompted for confirmation, Tap "Upload" if you sure and anywhere else to cancel. In case you want
            to leave notes along with your upload. Tap "Want to leave notes?" and fill it in.
          </Text>

          <Text size="sm">
            After upload complete, A dialogue with shareable link shown. If you want to share me the link through
            carousell chat, you can copy the link "(for carousell)" and paste it in the chat. Copy the link (normal
            share) for any other chat program. Click "Done" when you complete : )
          </Text>

          <Text size="sm">Thank you</Text>
        </>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return (
    <Button onClick={openModal} radius="xl" size="md">
      How to use ?
    </Button>
  );
}

export default function Home() {
  const { classes } = useStyles();
  const { refreshUser } = useUser();
  const router = useRouter();
  const config = useConfig();
  const [signupEnabled, setSignupEnabled] = useState(true);

  // If user is already authenticated, redirect to the upload page
  useEffect(() => {
    refreshUser().then((user) => {
      if (user) {
        router.replace('/upload');
      }
    });

    // If registration is disabled, get started button should redirect to the sign in page
    try {
      const allowRegistration = config.get('share.allowRegistration');
      setSignupEnabled(allowRegistration !== false);
    } catch (error) {
      setSignupEnabled(true);
    }
  }, [config]);

  const getButtonHref = () => {
    return signupEnabled ? '/auth/signUp' : '/auth/signIn';
  };

  return (
    <>
      <Meta title="Louislabs file share" />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <ClientQR />

            <div>louislabs file sharing</div>

            <Button component={Link} href={'/upload'} radius="xl" size="md" className={classes.control}>
              {/* <FormattedMessage id="home.button.start" /> */}
              <div>Go Upload</div>
            </Button>

            <Demo />
          </div>
        </div>
      </Container>
    </>
  );
}
