export default {
  async paths() {
    const sigs = await (
      await fetch(
        'https://magicapi.osinfra.cn/stat/sig/info?community=openeuler'
      )
    ).json();
    return sigs?.data?.map((sig) => {
      return {
        params: {
          sig: `${sig.name}`,
        },
      };
    });
  },
};