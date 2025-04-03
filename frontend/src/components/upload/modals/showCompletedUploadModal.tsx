import { Button, Stack, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { ModalsContextProps } from "@mantine/modals/lib/context";
import moment from "moment";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import useTranslate, {
  translateOutsideContext,
} from "../../../hooks/useTranslate.hook";
import { CompletedShare } from "../../../types/share.type";
import CopyTextField from "../CopyTextField";
import CopyCarousellTextField from '../CopyCarousellTextField';
import ClientQR from './ClientQR';


const showCompletedUploadModal = (
  modals: ModalsContextProps,
  share: CompletedShare,
) => {
  const t = translateOutsideContext();
  return modals.openModal({
    closeOnClickOutside: false,
    withCloseButton: false,
    closeOnEscape: false,
    title: t("upload.modal.completed.share-ready"),
    children: <Body share={share} />,
  });
};



const Body = ({ share }: { share: CompletedShare }) => {
  const modals = useModals();
  const router = useRouter();
  const t = useTranslate();

  const isReverseShare = !!router.query["reverseShareToken"];

  const link = `${window.location.origin}/s/${share.id}`;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '0.5rem', backgroundColor: '#F1EFEC', borderRadius: '0.5rem' }}>
          <ClientQR />
        </div>
      </div>

      <div style={{ padding: '1rem' }}></div>

      <Stack align="stretch">
        <CopyTextField link={link} />
        {share.notifyReverseShareCreator === true && (
          <Text
            size="sm"
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[4],
            })}
          >
            {t('upload.modal.completed.notified-reverse-share-creator')}
          </Text>
        )}

        <CopyCarousellTextField link={link.replace(/http/, 'ttp')} />

        {share.notifyReverseShareCreator === true && (
          <Text
            size="sm"
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[4],
            })}
          >
            {t('upload.modal.completed.notified-reverse-share-creator')}
          </Text>
        )}

        {/* REQ_0001 hide message from oiginal project */}
        <div style={{ display: 'none' }}>
          <Text
            size="xs"
            sx={(theme) => ({
              color: theme.colors.gray[6],
            })}
          >
            {/* If our share.expiration is timestamp 0, show a different message */}
            {moment(share.expiration).unix() === 0
              ? t('upload.modal.completed.never-expires')
              : t('upload.modal.completed.expires-on', {
                  expiration: moment(share.expiration).format('LLL'),
                })}
          </Text>
        </div>
        {/* REQ_0001 hide message from oiginal project */}

        <Text
          size="sm"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[4],

            marginTop: '1rem',
            textAlign: 'center',
          })}
        >
          You can share the file(s) using link above, Thanks.
        </Text>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => {
              modals.closeAll();
              if (isReverseShare) {
                router.reload();
              } else {
                router.push('/upload');
              }
            }}
            mt={'1rem'}
            mb={'1rem'}
          >
            <FormattedMessage id="common.button.done" />
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default showCompletedUploadModal;
