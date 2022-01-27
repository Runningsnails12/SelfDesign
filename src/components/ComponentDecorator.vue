<script>
import { computed, defineComponent, h } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    transformer: {
      type: Function,
      default: (rawData) => rawData
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    if (!slots.default) return () => '空的';

    const store = useStore();

    const rawData = computed(() => store.state.components.get(props.id) ?? null);

    const data = computed(() => props.transformer(rawData.value));

    const onClickWrapper = (cb) =>
      (e) => {
        emit('click', e);
        store.commit('setActiveComponent', props.id);
        if (cb) cb(e);
      };

    return () =>
      slots.default({ data: data.value })
        .map(
          comp => h(
            comp.type,
            {
              ...comp.ponClickWrapper,
              onClick: onClickWrapper(comp.props.onClick)
            },
            comp.children
          )
        );
  }
});
</script>
