import fg from "fast-glob";

export default function CustomHmr() {
  return {
    name: "watch-external",
    async buildStart() {
      const files = await fg(["src/**/*", "public/**/*"]);
      for (let file of files) {
        this.addWatchFile(file);
      }
    },
  };
}
