export default function ({ store, redirect, route }) {
  if (!store.state.isAuthenticated) return redirect(`/login`);
}
